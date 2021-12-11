# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Jury.destroy_all
Repertoire.destroy_all

julian = Jury.create(name: "Julian Bream", instrument: "guitar", technique: "A major scales and arpeggios, Giuliani 120 studies")
jascha = Jury.create(name: "Jascha Heifetz", instrument: "violin", technique: "Kreutzer etudes")
artur = Jury.create(name: "Artur Rubinstein", instrument: "piano", technique: "Czerny studies in B-flat major")

julian.repertoires.create!(composer: "Lennox Berkeley", title: "Sonatina")
julian.repertoires.create!(composer: "J.S. Bach", title: "Lute Suite in E minor")
jascha.repertoires.create!(composer: "Mendelssohn", title: "Concerto in Em")
jascha.repertoires.create!(composer: "Beethoven", title: "Kreutzer Sonata")
artur.repertoires.create!(composer: "Frideric Chopin", title: "Nocturne, op.55 no.2")
artur.repertoires.create!(composer: "Igor Stravinsky", title: "Trois mouvements de Petrouchka")
