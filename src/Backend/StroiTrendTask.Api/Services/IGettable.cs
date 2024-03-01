namespace StroiTrendTask.Api.Services;

public interface IGettable<TModel>
{
    Task<TModel?> GetData();
}