using HairdressesAPI.DTOs;
using HairdressesAPI.Models;
using Riok.Mapperly.Abstractions;

namespace HairdressesAPI.Mappings
{
    [Mapper]
    public static partial class WorkerMapper
    {
        public static partial WorkerDTO? MapWorkerToWorkerDTO(this Worker? worker);
        public static partial Worker? MapWorkerDTOToWorker(this WorkerDTO? workerDTO);
    }
}
