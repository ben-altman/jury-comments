class Api::V1::RepertoiresController < ApplicationController
    def create 
        jury = Jury.find_by(id: params[:jury_id])
        repertoire = jury.repertoires.build(repertoire_params)
        if repertoire.save
            render json: repertoire 
        end
    end

    def index
        repertoires = Jury.find_by(id: params[:jury_id]).repertoires
        render json: repertoires
    end

    private
    def repertoire_params
        params.require(:repertoire).permit(:composer, :title, :jury_id)
    end
end
