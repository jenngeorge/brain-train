class Api::DecksController < ApplicationController

  def create
    @deck = Deck.new(deck_params)
    if @deck.save
      render :show
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def update
    @deck = Deck.find(params[:id])
    if @deck.update_attributes(deck_params)
      render :show
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def destroy
    @deck = Deck.find(params[:id])
    @deck = @deck.destroy

    render :show
  end

  def show
    @deck = Deck.find(params[:id])
  end

  def index
    if params[:subjectId]
      @decks = Deck.includes(:cards)
      .where(subject_id: params[:subjectId])
    else
      @decks = Deck.includes(:cards)
    end
  end

  def deck_params
    params.require(:deck).permit(:user_id, :title, :subject_id)
  end
end
