photos = @photos if @photos

json.array! photos.pluck(:id)
