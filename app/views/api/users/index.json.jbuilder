users = @users if @users

users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :banner_photo_id, :profile_photo_id
    json.photoIds user.photos.pluck(:id)
    json.followeeIds user.followees.pluck(:id)
    json.followeeUploads user.followees.each do |followee|
      json.set! followee.id do
        json.array! followee.photos.pluck(:id)
      end
    end
  end
end
