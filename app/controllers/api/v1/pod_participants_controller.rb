module Api::V1
  class PodParticipantsController < ApplicationController
    before_action :set_pod_participant, only: [:update, :destroy]

    # GET /pod_participants
    def index
      result = PodParticipants.where(
        pod_id: params[:pod_id]
      )

      participants = result.pluck(:participant_id).map do |p_id|
        Participant.find(p_id)
      end

      @pod_participants = {
        pod: Pod.find(params[:pod_id]),
        participants: participants
      }
      render json: @pod_participants
    end

    # GET /pod_participants/1
    def show
      @pod_participant = {
        participant: Participant.find(params[:id]),
        wishlist: Wishlist.where(
          pod_id: params[:pod_id],
          participant_id: params[:id]
        )
      }
      render json: @pod_participant
    end

    # POST /pod_participants
    def create
      @pod_participant = PodParticipants.new(pod_params)

      if @pod_participant.save
        render json: @pod_participant, status: :created
      else
        render json: @pod_participant.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /pod_participants/1
    def update
      if @pod_participant.update(pod_params)
        render json: @pod_participant
      else
        render json: @pod_participant.errors, status: :unprocessable_entity
      end
    end

    # DELETE /pod_participants/1
    def destroy
      @pod_participant.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_pod_participant
        @pod_participant = PodParticipants.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def pod_partipant_params
        params.require(:pod).permit(:pod_id, :participant_id)
      end
  end

end
