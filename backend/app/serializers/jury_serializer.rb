class JurySerializer < ActiveModel::Serializer
  attributes :id, :name, :instrument, :technique, :slug

  has_many :comments
  has_many :repertoires

end
