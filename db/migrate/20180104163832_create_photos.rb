class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.integer :uploader_id, null: false
      t.integer :preferred_order, default: nil

      t.timestamps
    end
    add_index :photos, :uploader_id
    add_index :photos, :preferred_order
  end
end
