using StroiTrendTask.Api.Models;

namespace StroiTrendTask.Api.Services;

public class ResponseTimeService : Gettable<ResponseTime>, IResponseTimeService
{
    private readonly IFileLoader _fileLoader;

    public ResponseTimeService(IFileLoader fileLoader)
    {
        _fileLoader = fileLoader;
    }

    public override async Task<ResponseTime?> GetData()
    {
        var responseTime = await _fileLoader.LoadFile<ResponseTime>("Data/response_time.json");

        return responseTime;
    }
}