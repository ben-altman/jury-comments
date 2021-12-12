class Api::V1::CommentsController < ApplicationController

    def create 
        jury = Jury.find_by(id: params[:jury_id])
        comment = jury.comments.build(comment_params)
        if comment.save
            render json: comment 
        end
    end

    def index
        comments = Jury.find_by(id: params[:jury_id]).comments
        render json: comments
    end

    private
    def comment_params
        params.require(:comment).permit(:content, :score)
    end
end
