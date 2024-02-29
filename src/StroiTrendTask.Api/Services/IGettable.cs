namespace StroiTrendTask.Api.Services;

public interface IGettable<T>
{
    Task<T?> GetData();
}