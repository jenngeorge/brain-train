
class Api::CardScoresController < ApplicationController

      def create
        @card_score = CardScore.new(card_score_params)
        if @card_score.save
          @card = @card_score.card
          render "api/cards/show"
        else
          render json: @card_score.errors.full_messages, status: 422
        end
      end

      def update
        @card_score = CardScore.find(params[:id])
        if @card_score.update_attributes(card_score_params)
          @card = @card_score.card
          render "api/cards/show"
        else
          render json: @card_score.errors.full_messages, status: 422
        end
      end

      def card_score_params
        params.require(:card_score).permit(:user_id, :card_id, :score)
      end
end
