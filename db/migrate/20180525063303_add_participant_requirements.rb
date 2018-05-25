class AddParticipantRequirements < ActiveRecord::Migration[5.2]
  def change
    change_column_null :participants, :email, false
    change_column_null :participants, :name, false
  end
end
