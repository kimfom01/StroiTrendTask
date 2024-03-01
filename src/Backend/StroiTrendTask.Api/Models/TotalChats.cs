using System.Text.Json.Serialization;

namespace StroiTrendTask.Api.Models;

public class TotalChats : BaseModel
{
    [JsonPropertyName("records")] public Dictionary<string, CountData> Records { get; set; }
}

public class CountData
{
    [JsonPropertyName("total")] public int Total { get; set; }
}