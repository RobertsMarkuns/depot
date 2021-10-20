module VisitCounter

  private

    def set_counter
      if session[:counter].nil?
        session[:counter] = 1
      else
        session[:counter] += 1
      end

      @counter = session[:counter]
    end

    def reset_counter
      session[:counter] = 0
    end
end
