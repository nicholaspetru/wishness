class CreatePodParticipants < ActiveRecord::Migration[5.2]
  def change
    create_table :pod_participants do |t|
      t.references :pod, foreign_key: true
      t.references :participant, foreign_key: true

      t.timestamps
    end
  end
end
