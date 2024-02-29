using System.Text.Json;

namespace StroiTrendTask.Api.Services;

public class JsonLoader : IFileLoader
{
    public async Task<T?> LoadFile<T>(string path)
    {
        var file = File.Open(path, FileMode.Open);

        var json = await JsonSerializer.DeserializeAsync<T>(file);

        return json;
    }
}