class MainController < ApplicationController

  def index
    gif = Gif.unique_random(session[:gifs_seen] ||= [])
    redirect_to "/#{gif.token}"
  end

  def show
    session[:gifs_seen] ||= []
    session[:votes] ||= {}
    @image = Gif.find_by_token(params[:token])
    session[:gifs_seen] << @image.token unless session[:gifs_seen].include?(@image.token)
    previous_index = session[:gifs_seen].index(params[:token])-1
    next_index = session[:gifs_seen].index(params[:token])+1
    @previous_token = session[:gifs_seen][previous_index]
    @next_token = session[:gifs_seen][next_index]

    p "================ SESSIONS ====================="
    p session[:gifs_seen]
    p session[:votes]
    # p previous_index
    # p next_index
    # p @previous_token
    # p @next_token

  end

  def clear
    p "================ SESSIONS ====================="
    p session[:gifs_seen]
    p session[:votes]
    session[:gifs_seen] = []
    session[:votes] = []
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

  def boat
    p "================ VOTE PARAMS ====================="
    p params
    session[:votes][params[:token]] = params[:vote]
    Gif.vote(params[:token],params[:vote])
    render :nothing => true, :status => 200, :content_type => 'text/html'
  end
end
