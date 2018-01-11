users = @users if @users

json.array! users.each do |user|
  json.extract! user, :id, :username, :banner_photo_id, :profile_photo_id
end
