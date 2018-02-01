user = @user if @user

json.extract! user, :id, :username, :banner_photo_id, :profile_photo_id
json.photoIds user.photos.pluck(:id)
json.followeeIds user.followees.pluck(:id)
json.followeeUploads user.followees.each do |followee|
  json.set! followee.id do
    json.array! followee.photos.pluck(:id)
  end
end
json.followers user.followers.count
