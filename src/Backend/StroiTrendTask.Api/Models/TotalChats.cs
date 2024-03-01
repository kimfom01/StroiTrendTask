using System.Text.Json.Serialization;

namespace StroiTrendTask.Api.Models;

public class TotalChats
{
    [JsonPropertyName("name")]  public string Name { get; set; }
    [JsonPropertyName("request")]  public Request Request { get; set; }
    [JsonPropertyName("total")] public int Total { get; set; }
    [JsonPropertyName("records")] public Dictionary<string, CountData> Records { get; set; }
}