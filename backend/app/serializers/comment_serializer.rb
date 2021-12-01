class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :score
end
