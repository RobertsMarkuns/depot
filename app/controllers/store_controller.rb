class StoreController < ApplicationController
  skip_before_action :authorize

  include CurrentCart
  before_action :set_cart
  include VisitCounter
  before_action :set_counter, only: [:index]

  def index
    if params[:set_locale]
      redirect_to store_index_url(locale: params[:set_locale])
    else
      @products = Product.order(:title)
    end
  end
end
