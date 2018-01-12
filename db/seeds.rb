# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# for local db, id "3" is the demo user and id "9" is a random user ; for heroku, switch id to
# for heroku, id "6" is the demo user and id "3" is remy

Photo.destroy_all

# NOTE: You need to change the banner_profile_id and profile_photo_id for
# many users in this file if you want to re-seed

me = User.new(username: "eden", password: "starwars")
me.save!
nature = User.new(username: "nature stuffs", password: "nature")
nature.save!
city = User.new(username: "city dweller", password: "citybaby")
city.save!
arch = User.new(username: "dank architecture", password: "architecture")
arch.save!
food = User.new(username: "food obsessed", password: "foodie")
food.save!
animal = User.new(username: "animal lover", password: "animal")
animal.save!


ee = Photo.new(title: "Scared Potato", uploader_id: food.id)
ee.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/food/potato-french-fries.jpeg"
ee.save!
food.profile_photo_id = ee.id

ff = Photo.new(title: "Spices In Spoons", uploader_id: food.id)
ff.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/food/spices-in-spoons.jpeg"
ff.save!
food.banner_photo_id = ff.id

gg = Photo.new(title: "Pup In Cup (best doggo ever)", uploader_id: animal.id)
gg.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/animals/dog-in-cup.jpeg"
gg.save!
animal.banner_photo_id = gg.id

hh = Photo.new(title: "Cat Nap", uploader_id: animal.id)
hh.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/animals/cat-sleeping.jpeg"

ii = Photo.new(title: "Cute Bunny Rabbits", uploader_id: animal.id)
ii.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/animals/rabbits-eating-grass.jpg"
ii.save!
animal.profile_photo_id = ii.id

a = Photo.new(title: "Train Station", uploader_id: me.id)
a.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/misc/amtrak.jpeg"
a.save!

b = Photo.new(title: "Curvy Steel Buildings", uploader_id: arch.id)
b.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/architecture/curvy-metal-buildings.jpeg"
b.save!

c = Photo.new(title: "Bridge In Fog", uploader_id: city.id)
c.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/city/bridge-into-fog.jpeg"
c.save!

d = Photo.new(title: "Elevator Reflection", uploader_id: arch.id)
d.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/architecture/elevator-reflection.jpeg"
d.save!

e = Photo.new(title: "Foggy River, Skinny Trees", uploader_id: nature.id)
e.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/nature/foggy-river-skinny-trees.jpeg"
e.save!

f = Photo.new(title: "Blurry Night", uploader_id: me.id)
f.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/misc/blurry-night.jpeg"
f.save!
me.profile_photo_id = f.id
me.save!

g = Photo.new(title: "Waterfall", uploader_id: nature.id)
g.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/nature/waterfall.jpeg"
g.save!

h = Photo.new(title: "Jungle Heights", uploader_id: nature.id)
h.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/nature/top-of-jungle.jpeg"
h.save!
nature.banner_photo_id = h.id
nature.save!

i = Photo.new(title: "Highway Overpass", uploader_id: city.id)
i.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/city/highway-overpass.jpeg"
i.save!
city.profile_photo_id = i.id
city.save!

j = Photo.new(title: "Foggy Forest Road", uploader_id: me.id)
j.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/nature/foggy-forest-road.jpg"
j.save!
me.banner_photo_id = j.id
me.save!

k = Photo.new(title: "Apartments Packed Tight", uploader_id: arch.id)
k.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/architecture/apartment-windows.jpeg"
k.save!
arch.banner_photo_id = j.id
arch.save!

l = Photo.new(title: "Blocky Brutalist Glass Buildings", uploader_id: arch.id)
l.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/architecture/blocky-buildings.jpeg"
l.save!
arch.profile_photo_id = j.id
arch.save!

m = Photo.new(title: "Icy Tree", uploader_id: nature.id)
m.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/nature/icy-tree.jpeg"
m.save!
nature.profile_photo_id = j.id
nature.save!

n = Photo.new(title: "Lit Skyline", uploader_id: city.id)
n.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/city/lit-skyline.jpeg"
n.save!
city.banner_photo_id = j.id
city.save!

o = Photo.new(title: "Night Bridge", uploader_id: me.id)
o.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/misc/night-bridge.jpeg"
o.save!

q = Photo.new(title: "Cubes Against The Sky", uploader_id: me.id)
q.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/misc/blocks-and-sky.jpg"
q.save!

r = Photo.new(title: "Orange Trees On A Snowy Mountain", uploader_id: nature.id)
r.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/nature/orange-trees-snow.jpeg"
r.save!

s = Photo.new(title: "Curvy Wood Buildings", uploader_id: arch.id)
s.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/architecture/curvy-wood-buildings.jpeg"
s.save!

t = Photo.new(title: "White Hallway", uploader_id: arch.id)
t.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/architecture/white-hallway.png"
t.save!

u = Photo.new(title: "Grey Shapes", uploader_id: me.id)
u.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/architecture/grey-shapes.jpeg"
u.save!

v = Photo.new(title: "A Marsh In A Field", uploader_id: nature.id)
v.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/nature/marshy-field.jpeg"
v.save!

w = Photo.new(title: "Cloudy City", uploader_id: city.id)
w.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/city/cloudy-city-from-above.jpeg"
w.save!

x = Photo.new(title: "Skylight Circle", uploader_id: me.id)
x.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/architecture/circle-skylight.jpeg"
x.save!

y = Photo.new(title: "House On The Water", uploader_id: arch.id)
y.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/architecture/house-water-reflection.jpeg"
y.save!

z = Photo.new(title: "Towering Towers", uploader_id: me.id)
z.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/architecture/towering-towers.jpeg"
z.save!

aa = Photo.new(title: "Rock Stack By A River", uploader_id: nature.id)
aa.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/nature/rock-stack.jpeg"
aa.save!

bb = Photo.new(title: "Water Under Building", uploader_id: arch.id)
bb.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/architecture/water-under-building.jpeg"
bb.save!

cc = Photo.new(title: "Foggy City Street", uploader_id: city.id)
cc.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/city/foggy-city-street.jpeg"
cc.save!

dd = Photo.new(title: "Window Pattern", uploader_id: arch.id)
dd.image = "https://s3.us-east-2.amazonaws.com/flexpx-dev/architecture/wood-window-pattern.jpeg"
dd.save!
