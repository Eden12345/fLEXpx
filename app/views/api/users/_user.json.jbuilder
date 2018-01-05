user = @user if @user

json.extract! user, :id, :username
json.photo_ids user.photos.each do |photo|
  json.extract! photo, :id
end
