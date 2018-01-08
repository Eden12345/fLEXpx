user = @user if @user

json.extract! user, :id, :username, :banner_photo_id, :profile_photo_id
json.photoIds user.photos.pluck(:id)
