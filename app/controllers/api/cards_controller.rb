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
      @card = Card.find(params[:id])
    end

    def index
      if params[:deckId]
        @cards = Card.where(deck_id: params[:deckId])
      else
        @cards = Card.all
      end
    end

    def card_params
      params.require(:card).permit(:question, :anwswer, :card_id)
    end
end
