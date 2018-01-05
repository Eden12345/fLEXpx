user = @user if @user

json.extract! user, :id, :username, :banner_photo_id, :profile_photo_id
json.photo_ids user.photos.each do |photo|
  json.extract! photo, :id
end
