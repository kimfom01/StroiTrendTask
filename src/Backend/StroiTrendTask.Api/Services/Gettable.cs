namespace StroiTrendTask.Api.Services;

public abstract class Gettable<TModel> : IGettable<TModel> where TModel : class
{
    public abstract Task<TModel?> GetData();
}