namespace StroiTrendTask.Api.Services;

public abstract class Gettable<T> : IGettable<T>
{
    public abstract Task<T?> GetData();
}