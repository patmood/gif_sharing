class MainController < ApplicationController

  def index
    gif = Gif.unique_random(session[:gifs_seen] ||= [])
    redirect_to "/#{gif.token}"
  end

  def show
    session[:gifs_seen] ||= []
    @image = Gif.find_by_token(params[:token])
    session[:gifs_seen] << @image.token unless session[:gifs_seen].include?(@image.token)
  end

  def clear
    session.clear
    redirect_to root_path
  end

  def new
    @gif = Gif.new
  end

  def create
    if valid_url = /(http:\/\/i.imgur.com\/)(\w+)(.gif)/.match(params['url'])
      token = valid_url[2]
      @gif = Gif.create(url: params['url'], token: token)
      redirect_to "/#{token}"
    end
  end
end
