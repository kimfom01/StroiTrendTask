using StroiTrendTask.Api.Models;

namespace StroiTrendTask.Api.Services;

public class DurationService : Gettable<Duration>, IDurationService
{
    private readonly IFileLoader _fileLoader;

    public DurationService(IFileLoader fileLoader)
    {
        _fileLoader = fileLoader;
    }

    public override async Task<Duration?> GetData()
    {
        var duration = await _fileLoader.LoadFile<Duration>("Data/duration.json");

        return duration;
    }

    public async Task<Records?> GetRecords()
    {
        var duration = await GetData();

        var records = duration?.Records;

        return records;
    }
}