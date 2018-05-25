module Api::V1
  class PodsController < ApplicationController
    before_action :set_pod, only: [:show, :update, :destroy]

    # GET /pods
    def index
      @pods = Pod.all

      render json: @pods
    end

    # GET /pods/1
    def show
      render json: @pod
    end

    # POST /pods
    def create
      @pod = Pod.new(pod_params)

      if @pod.save
        render json: @pod, status: :created, location: @pod
      else
        render json: @pod.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /pods/1
    def update
      if @pod.update(pod_params)
        render json: @pod
      else
        render json: @pod.errors, status: :unprocessable_entity
      end
    end

    # DELETE /pods/1
    def destroy
      @pod.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_pod
        @pod = Pod.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def pod_params
        params.require(:pod).permit(:title, :description)
      end
  end

end
