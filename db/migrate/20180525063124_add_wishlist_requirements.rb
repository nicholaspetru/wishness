class AddWishlistRequirements < ActiveRecord::Migration[5.2]
  def change
    change_column_null :wishlists, :pod_id, false
    change_column_null :wishlists, :participant_id, false
  end
end
