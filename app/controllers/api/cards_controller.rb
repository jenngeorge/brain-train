
class Api::CardsController < ApplicationController

    def create
      @card = Card.new(card_params)
      if @card.save
        render :show
      else
        render json: @card.errors.full_messages, status: 422
      end
    end

    def update
      @card = Card.find(params[:id])
      if @card.update_attributes(card_params)
        render :show
      else
        render json: @card.errors.full_messages, status: 422
      end
    end

    def destroy
      @card = Card.find(params[:id])
      @card = @card.destroy

      render :show
    end

    def show
      @card = Card.includes(:card_scores).find(params[:id])
    end

    def index
      if params[:deckId]
        @cards = Card.includes(:card_scores).where(deck_id: params[:deckId])
        @cards
      else
        @cards = Card.includes(:card_scores).all
      end
    end

    def card_params
      params.require(:card).permit(:question, :answer, :deck_id)
    end
end
