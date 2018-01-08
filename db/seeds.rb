# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Photo.destroy_all

a = Photo.new(title: "bluebuilding", uploader_id: 1)
a.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/blue-building.jpeg"
a.save!
b = Photo.new(title: "icytree", uploader_id: 1)
b.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/icy-tree.jpeg"
b.save!
c = Photo.new(title: "lightswirl", uploader_id: 1)
c.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/light-trail.jpeg"
c.save!
d = Photo.new(title: "foggyroad", uploader_id: 1)
d.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/foggy-forest-road.jpg"
d.save!
e = Photo.new(title: "squirrel", uploader_id: 1)
e.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/squirrel.jpeg"
e.save!
f = Photo.new(title: "towers", uploader_id: 1)
f.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/towering-towers.jpeg"
f.save!

u = User.find(1)
u.banner_photo_id = d.id
u.profile_photo_id = e.id
u.save!

# for local db, set id to "3" for demo user ; for heroku, switch id to "6" for demo user

g = Photo.new(title: "mansion", uploader_id: 3)
g.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/mansion.jpeg"
g.save!
h = Photo.new(title: "europe", uploader_id: 3)
h.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/europe-city.jpeg"
h.save!

# for local db, set id to "9" for extra user; for heroky , switch id to "3" for remy

i = Photo.new(title: "waterfall", uploader_id: 9)
i.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/waterfall.jpeg"
i.save!
j = Photo.new(title: "forestbridge", uploader_id: 3)
j.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/forest-bridge.jpeg"
j.save!

x = User.find(9)
x.banner_photo_id = i.id
x.profile_photo_id = j.id
x.save!
