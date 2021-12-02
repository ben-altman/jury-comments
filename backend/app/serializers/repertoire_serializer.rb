class RepertoireSerializer < ActiveModel::Serializer
  attributes :id, :composer, :title

  belongs_to :jury
end
