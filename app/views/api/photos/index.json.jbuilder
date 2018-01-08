photos = @photos if @photos

photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :title, :id, :uploader_id
    json.large photo.image.url(:large)
    json.medium photo.image.url(:medium)
    json.avatar photo.image.url(:avatar)
    json.thumb photo.image.url(:thumb)
  end
end
