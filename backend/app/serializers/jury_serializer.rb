class JurySerializer < ActiveModel::Serializer
  attributes :id, :name, :instrument, :technique

  has_many :comments
  has_many :repertoires

end
