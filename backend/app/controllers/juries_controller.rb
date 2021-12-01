class JuriesController < ApplicationController

    def index
        juries = Jury.all
        render json: juries.to_json(except: [:created_at, :updated_at] , include: :repertoires, incllude: :comments)
    end

    def show
        jury = Jury.find(params[:id])
        render json: jury.to_json
    end

    def create
        
    end
end
