class StoreController < ApplicationController
  skip_before_action :authorize

  include CurrentCart
  before_action :set_cart
  include VisitCounter
  before_action :set_counter, only: [:index]

  def index
      @products = Product.order(:title)
  end
end
