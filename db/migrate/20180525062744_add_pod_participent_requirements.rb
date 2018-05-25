class AddPodParticipentRequirements < ActiveRecord::Migration[5.2]
  def change
    change_column_null :pod_participants, :pod_id, false
    change_column_null :pod_participants, :participant_id, false
  end
end
