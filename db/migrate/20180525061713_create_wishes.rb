class CreateWishes < ActiveRecord::Migration[5.2]
  def change
    create_table :wishes do |t|
      t.references :wishlist, foreign_key: true
      t.string :name
      t.string :url
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
