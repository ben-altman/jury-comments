# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

julian = Jury.create(name: "Julian Bream", instrument: "guitar", technique: "A major scales and arpeggios, Giuliani 120 studies")
jascha = Jury.create(name: "Jascha Heifetz", instrument: "violin", technique: "Kreutzer etudes")
artur = Jury.create(name: "Artur Rubinstein", instrument: "piano", technique: "Czerny studies in B-flat major")


# bird_a = Bird.create(name: "Black-Capped Chickadee", species: "Poecile Atricapillus")
# bird_b = Bird.create(name: "Grackle", species: "Quiscalus Quiscula")
# bird_c = Bird.create(name: "Common Starling", species: "Sturnus Vulgaris")
# bird_d = Bird.create(name: "Mourning Dove", species: "Zenaida Macroura")

# location_a = Location.create(latitude: "40.730610", longitude: "-73.935242")
# location_b = Location.create(latitude: "30.26715", longitude: "-97.74306")
# location_c = Location.create(latitude: "45.512794", longitude: "-122.679565")

# sighting_a = Sighting.create(bird: bird_a, location: location_b)
# sighting_b = Sighting.create(bird: bird_b, location: location_a)
# sighting_c = Sighting.create(bird: bird_c, location: location_a)
# sighting_d = Sighting.create(bird: bird_d, location: location_c)
# sighting_e = Sighting.create(bird: bird_a, location: location_b)