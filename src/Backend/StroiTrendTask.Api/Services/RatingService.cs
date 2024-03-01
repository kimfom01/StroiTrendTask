using StroiTrendTask.Api.Models;

namespace StroiTrendTask.Api.Services;

public class RatingService : Gettable<Ratings>, IRatingService
{
    private readonly IFileLoader _fileLoader;

    public RatingService(IFileLoader fileLoader)
    {
        _fileLoader = fileLoader;
    }
    
    public override async Task<Ratings?> GetData()
    {
        var ratings = await _fileLoader.LoadFile<Ratings>("Data/ratings.json");

        return ratings;
    }
}