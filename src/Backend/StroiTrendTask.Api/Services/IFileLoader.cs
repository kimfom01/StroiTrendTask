namespace StroiTrendTask.Api.Services;

public interface IFileLoader
{
    Task<T?> LoadFile<T>(string path);
}