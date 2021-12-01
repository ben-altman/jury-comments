class JurySerializer < ActiveModel::Serializer
  attributes :id, :name, :instrument, :technique
end
