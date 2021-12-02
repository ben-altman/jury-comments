class JuriesController < ApplicationController

    def index
        juries = Jury.all
        render json: juries
    end

    def show
        jury = Jury.find(params[:id])
        render json: jury
    end

    def create
        
    end
end
