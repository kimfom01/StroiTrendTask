using StroiTrendTask.Api.Models;

namespace StroiTrendTask.Api.Services;

public class TagsService : Gettable<Tags>, ITagsService
{
    private readonly IFileLoader _fileLoader;

    public TagsService(IFileLoader fileLoader)
    {
        _fileLoader = fileLoader;
    }

    public override async Task<Tags?> GetData()
    {
        var tags = await _fileLoader.LoadFile<Tags>("Data/tags.json");

        return tags;
    }
}