class AddProfileAndBannerToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :profile_photo_id, :integer
    add_column :users, :banner_photo_id, :integer
    add_index :users, :profile_photo_id
    add_index :users, :banner_photo_id
  end
end
