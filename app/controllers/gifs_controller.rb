class GifsController < ApplicationController

  def new
    @gif = Gif.new
  end

  def create
    @gif = Gif.create(url: params['gif']['url'])
    redirect_to root_path
  end


end
