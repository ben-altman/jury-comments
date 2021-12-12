class Api::V1::JuriesController < ApplicationController
    def index
        juries = Jury.all
        render json: juries
        # render json: JurySerializer.new(juries)
    end

    def create
        jury = Jury.new(jury_params)
        if jury.save
            render json: jury, status: :accepted
        else
            render json: {errors: jury.errors.full_messages}, status: :unprocessible_entity
        end
    end

    # def show
    #     jury = Jury.find(params[:id])
    #     render json: jury
    # end

    private

    def jury_params
        params.require(:jury).permit(
            :name,
            :instrument,
            :technique
        )
    end
end
