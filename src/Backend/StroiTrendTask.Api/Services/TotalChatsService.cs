using StroiTrendTask.Api.Models;

namespace StroiTrendTask.Api.Services;

public class TotalChatsService : Gettable<TotalChats>, ITotalChatsService
{
    private readonly IFileLoader _fileLoader;

    public TotalChatsService(IFileLoader fileLoader)
    {
        _fileLoader = fileLoader;
    }

    public override async Task<TotalChats?> GetData()
    {
        var totalChats = await _fileLoader.LoadFile<TotalChats>("Data/total_chats.json");

        return totalChats;
    }
}